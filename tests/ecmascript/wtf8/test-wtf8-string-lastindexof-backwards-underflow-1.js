/*===
43
-1
===*/

/* GH issue: lastIndexOf() with a search string containing an unpaired
 * surrogate, on a long input mixing ASCII with several adjacent non-BMP
 * codepoints (flag emoji, which are pairs of 4-byte regional indicator
 * codepoints), used to crash with a heap-buffer-overflow.  The string
 * cache's backwards WTF-8 scanner unrolled its main loop by 4 bytes,
 * assuming each byte can only reduce the remaining codepoint count by 1;
 * a non-BMP lead byte reduces it by 2, so two of those inside one
 * unrolled batch could underflow the (unsigned) counter and turn the
 * scan into an unbounded walk past the start of the string's buffer.
 */

function test() {
    var s = ['aaaaaaaaaaaaaaaaaaaaaaaaaaaa\u{1f1fa}\u{1f1f8} \u{1f1e6}\u{1f1eb}\u{1f1e6}\u{1f1f2}\u{1f1f8}'].pop();
    print(s.length);
    print(s.lastIndexOf('\uDA91Œ„´‰ˇÁ¨ˆØ∏”’'));
}

test();
