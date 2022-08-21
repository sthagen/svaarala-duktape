/*
 *  Symbol with a huge description.
 */

/*===
20000008
20000008
===*/

function test() {
    var s;

    s = Symbol('x\ucafe'.repeat(1e7));
    print(String(s).length);

    s = Symbol.for('x\ucafe'.repeat(1e7));
    print(String(s).length);
}

test();
