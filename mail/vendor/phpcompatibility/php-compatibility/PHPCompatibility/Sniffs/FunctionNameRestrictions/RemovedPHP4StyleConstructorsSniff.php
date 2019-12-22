<?php
/**
 * PHPCompatibility, an external standard for PHP_CodeSniffer.
 *
 * @package   PHPCompatibility
 * @copyright 2012-2019 PHPCompatibility Contributors
 * @license   https://opensource.org/licenses/LGPL-3.0 LGPL3
 * @link      https://github.com/PHPCompatibility/PHPCompatibility
 */

namespace PHPCompatibility\Sniffs\FunctionNameRestrictions;

use PHPCompatibility\Sniff;
use PHP_CodeSniffer_File as File;
use PHP_CodeSniffer_Tokens as Tokens;

/**
 * Detect declarations of PHP 4 style constructors which are deprecated as of PHP 7.0.0.
 *
 * PHP version 7.0
 */
class RemovedPHP4StyleConstructorsSniff extends Sniff
{

    /**
     * Returns an array of tokens this test wants to listen for.
     *
     * @return array
     */
    public function register()
    {
        return array(
            \T_CLASS,
        );
    }

    /**
     * Processes this test, when one of its tokens is encountered.
     *
     * @param \PHP_CodeSniffer_File $phpcsFile The file being scanned.
     * @param int                   $stackPtr  The position of the current token in the
     *                                         stack passed in $tokens.
     *
     * @return void
     */
    public function process(File $phpcsFile, $stackPtr)
    {
        if ($this->supportsAbove('7.0') === false) {
            return;
        }

        if ($this->determineNamespace($phpcsFile, $stackPtr) !== '') {
            /*
             * Namespaced methods with the same name as the class are treated as
             * regular methods, so we can bow out if we're in a namespace.
             *
             * Note: the exception to this is PHP 5.3.0-5.3.2. This is currently
             * not dealt with.
             */
            return;
        }

        $tokens = $phpcsFile->getTokens();

        $class = $tokens[$stackPtr];

        if (isset($class['scope_closer']) === false) {
            return;
        }

        $nextNonEmpty = $phpcsFile->findNext(Tokens::$emptyTokens, ($stackPtr + 1), null, true);
        if ($nextNonEmpty === false || $tokens[$nextNonEmpty]['code'] !== \T_STRING) {
            // Anonymous class in combination with PHPCS 2.3.x.
            return;
        }

        $scopeCloser = $class['scope_closer'];
        $className   = $tokens[$nextNonEmpty]['content'];

        if (empty($className) || \is_string($className) === false) {
            return;
        }

        $nextFunc            = $stackPtr;
        $classNameLc         = strtolower($className);
        $newConstructorFound = false;
        $oldConstructorFound = false;
        $oldConstructorPos   = -1;
        while (($nextFunc = $phpcsFile->findNext(array(\T_FUNCTION, \T_DOC_COMMENT_OPEN_TAG), ($nextFunc + 1), $scopeCloser)) !== false) {
            // Skip over docblocks.
            if ($tokens[$nextFunc]['code'] === \T_DOC_COMMENT_OPEN_TAG) {
                $nextFunc = $tokens[$nextFunc]['comment_closer'];
                continue;
            }

            $functionScopeCloser = $nextFunc;
            if (isset($tokens[$nextFunc]['scope_closer'])) {
                // Normal (non-interface, non-abstract) method.
                $functionScopeCloser = $tokens[$nextFunc]['scope_closer'];
            }

            $funcName = $phpcsFile->getDeclarationName($nextFunc);
            if (empty($funcName) || \is_string($funcName) === false) {
                $nextFunc = $functionScopeCloser;
                continue;
            }

            $funcNameLc = strtolower($funcName);

            if ($funcNameLc === '__construct') {
                $newConstructorFound = true;
            }

            if ($funcNameLc === $classNameLc) {
                $oldConstructorFound = true;
                $oldConstructorPos   = $nextFunc;
            }

            // If both have been found, no need to continue looping through the functions.
            if ($newConstructorFound === true && $oldConstructorFound === true) {
                break;
            }

            $nextFunc = $functionScopeCloser;
        }

        if ($newConstructorFound === false && $oldConstructorFound === true) {
            $phpcsFile->addWarning(
                'Use of deprecated PHP4 style class constructor is not supported since PHP 7.',
                $oldConstructorPos,
                'Found'
            );
        }
    }
}
