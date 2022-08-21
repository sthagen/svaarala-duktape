/*
 *  Write through a DataView
 */

/*@include util-buffer.js@*/
/*@include util-string.js@*/

/*---
custom: true
endianness: little
slow: true
---*/

/*===
write DataView test, arrayLength 16
-100 undefined 27449566
-100 0 28043124
-100 1 28048170
-100 2 28053216
-100 3 28058262
-100 4 28063308
-100 5 28068354
-100 6 28073400
-100 7 28078446
-100 8 28083492
-100 100 28506318
-10 undefined 26982286
-10 0 27600704
-10 1 27605516
-10 2 27610328
-10 3 27615140
-10 4 27619952
-10 5 27624764
-10 6 27629576
-10 7 27634388
-10 8 27639200
-10 100 28083896
-9 undefined 26624338
-9 0 27243598
-9 1 27248648
-9 2 27253698
-9 3 27258748
-9 4 27263798
-9 5 27268848
-9 6 27273898
-9 7 27278948
-9 8 27283998
-9 100 27605460
-8 undefined 26614402
-8 0 27233806
-8 1 27238856
-8 2 27243906
-8 3 27248956
-8 4 27254006
-8 5 27259056
-8 6 27264106
-8 7 27269156
-8 8 27274206
-8 100 27595470
-7 undefined 26604466
-7 0 27224014
-7 1 27229064
-7 2 27234114
-7 3 27239164
-7 4 27244214
-7 5 27249264
-7 6 27254314
-7 7 27259364
-7 8 27264414
-7 100 27585480
-6 undefined 26594530
-6 0 27214222
-6 1 27219272
-6 2 27224322
-6 3 27229372
-6 4 27234422
-6 5 27239472
-6 6 27244522
-6 7 27249572
-6 8 27254622
-6 100 27575490
-5 undefined 26584594
-5 0 27204430
-5 1 27209480
-5 2 27214530
-5 3 27219580
-5 4 27224630
-5 5 27229680
-5 6 27234730
-5 7 27239780
-5 8 27244830
-5 100 27565500
-4 undefined 26574658
-4 0 27194638
-4 1 27199688
-4 2 27204738
-4 3 27209788
-4 4 27214838
-4 5 27219888
-4 6 27224938
-4 7 27229988
-4 8 27235038
-4 100 27555510
-3 undefined 26564722
-3 0 27184846
-3 1 27189896
-3 2 27194946
-3 3 27199996
-3 4 27205046
-3 5 27210096
-3 6 27215146
-3 7 27220196
-3 8 27225246
-3 100 27545520
-2 undefined 26554786
-2 0 27175054
-2 1 27180104
-2 2 27185154
-2 3 27190204
-2 4 27195254
-2 5 27200304
-2 6 27205354
-2 7 27210404
-2 8 27215454
-2 100 27535530
-1 undefined 26544850
-1 0 27165262
-1 1 27170312
-1 2 27175362
-1 3 27180412
-1 4 27185462
-1 5 27190512
-1 6 27195562
-1 7 27200612
-1 8 27205662
-1 100 27525540
0 undefined 46453262
0 0 26815638
0 1 30825672
0 2 35663016
0 3 36515902
0 4 42841550
0 5 44342656
0 6 44347080
0 7 44351504
0 8 46557922
0 100 27195940
1 undefined 46465076
1 0 26825514
1 1 30833756
1 2 35666362
1 3 36541938
1 4 42890236
1 5 44352024
1 6 44356448
1 7 44360872
1 8 46547124
1 100 27205620
2 undefined 46479534
2 0 26835390
2 1 30840596
2 2 35671038
2 3 36536728
2 4 42893416
2 5 44368794
2 6 44373218
2 7 44377642
2 8 46578066
2 100 27215300
3 undefined 46486082
3 0 26845266
3 1 30853654
3 2 35678054
3 3 36567470
3 4 42914852
3 5 44368432
3 6 44372856
3 7 44377280
3 8 46585948
3 100 27224980
4 undefined 46508998
4 0 26855142
4 1 30865108
4 2 35687990
4 3 36557226
4 4 42883500
4 5 44383158
4 6 44387582
4 7 44392006
4 8 46605842
4 100 27234660
5 undefined 46474936
5 0 26865018
5 1 30875692
5 2 35703298
5 3 36574980
5 4 42909874
5 5 44387192
5 6 44391616
5 7 44396040
5 8 46603092
5 100 27244340
6 undefined 46516640
6 0 26874894
6 1 30880258
6 2 35726504
6 3 36580512
6 4 42942894
6 5 44413530
6 6 44417954
6 7 44422378
6 8 46616772
6 100 27254020
7 undefined 46523936
7 0 26884770
7 1 30891748
7 2 35722754
7 3 36592600
7 4 42949230
7 5 44414026
7 6 44418450
7 7 44422874
7 8 46636430
7 100 27263700
8 undefined 45972434
8 0 26894646
8 1 30905592
8 2 35720486
8 3 36611488
8 4 42942650
8 5 44425324
8 6 44429748
8 7 44434172
8 8 46646088
8 100 27273380
9 undefined 43866264
9 0 26904522
9 1 30913908
9 2 35755716
9 3 36604750
9 4 42930344
9 5 44427922
9 6 44432346
9 7 44436770
9 8 26785972
9 100 27283060
10 undefined 44285850
10 0 27351826
10 1 31237758
10 2 36158246
10 3 37020852
10 4 43340516
10 5 44844440
10 6 44849242
10 7 27229172
10 8 27234222
10 100 27555910
11 undefined 44276884
11 0 27361618
11 1 31245324
11 2 36164200
11 3 37035646
11 4 43362686
11 5 44858540
11 6 27233914
11 7 27238964
11 8 27244014
11 100 27565900
12 undefined 42768276
12 0 27371410
12 1 31262010
12 2 36182928
12 3 37050434
12 4 43354976
12 5 27238656
12 6 27243706
12 7 27248756
12 8 27253806
12 100 27575890
13 undefined 36459868
13 0 27381202
13 1 31264520
13 2 36192872
13 3 37045046
13 4 27243398
13 5 27248448
13 6 27253498
13 7 27258548
13 8 27263598
13 100 27585880
14 undefined 35570726
14 0 27390994
14 1 31281066
14 2 36200364
14 3 27248140
14 4 27253190
14 5 27258240
14 6 27263290
14 7 27268340
14 8 27273390
14 100 27595870
15 undefined 30750920
15 0 27400786
15 1 31291442
15 2 27252882
15 3 27257932
15 4 27262982
15 5 27268032
15 6 27273082
15 7 27278132
15 8 27283182
15 100 27605860
16 undefined 26792066
16 0 27410578
16 1 27257624
16 2 27262674
16 3 27267724
16 4 27272774
16 5 27277824
16 6 27282874
16 7 27287924
16 8 27292974
16 100 27615850
17 undefined 26644434
17 0 27262366
17 1 27267416
17 2 27272466
17 3 27277516
17 4 27282566
17 5 27287616
17 6 27292666
17 7 27297716
17 8 27302766
17 100 27625840
100 undefined 27011658
100 0 27632564
100 1 27637376
100 2 27642188
100 3 27647000
100 4 27651812
100 5 27656624
100 6 27661436
100 7 27666248
100 8 27671060
100 100 28112160
write DataView test, arrayLength 17
-100 undefined 27998794
-100 0 28497698
-100 1 28502610
-100 2 28507522
-100 3 28512434
-100 4 28517346
-100 5 28522258
-100 6 28527170
-100 7 28532082
-100 8 28536994
-100 100 28993736
-10 undefined 27446134
-10 0 28095434
-10 1 28100216
-10 2 28104998
-10 3 28109780
-10 4 28114562
-10 5 28119344
-10 6 28124126
-10 7 28128908
-10 8 28133690
-10 100 28541224
-9 undefined 27087660
-9 0 27620120
-9 1 27624750
-9 2 27629380
-9 3 27634010
-9 4 27638640
-9 5 27643270
-9 6 27647900
-9 7 27652530
-9 8 27657160
-9 100 28185102
-8 undefined 27077902
-8 0 27610130
-8 1 27614760
-8 2 27619390
-8 3 27624020
-8 4 27628650
-8 5 27633280
-8 6 27637910
-8 7 27642540
-8 8 27647170
-8 100 28175524
-7 undefined 27068144
-7 0 27600140
-7 1 27604770
-7 2 27609400
-7 3 27614030
-7 4 27618660
-7 5 27623290
-7 6 27627920
-7 7 27632550
-7 8 27637180
-7 100 28165946
-6 undefined 27058386
-6 0 27590150
-6 1 27594780
-6 2 27599410
-6 3 27604040
-6 4 27608670
-6 5 27613300
-6 6 27617930
-6 7 27622560
-6 8 27627190
-6 100 28156368
-5 undefined 27048628
-5 0 27580160
-5 1 27584790
-5 2 27589420
-5 3 27594050
-5 4 27598680
-5 5 27603310
-5 6 27607940
-5 7 27612570
-5 8 27617200
-5 100 28146790
-4 undefined 27038870
-4 0 27570170
-4 1 27574800
-4 2 27579430
-4 3 27584060
-4 4 27588690
-4 5 27593320
-4 6 27597950
-4 7 27602580
-4 8 27607210
-4 100 28137212
-3 undefined 27029112
-3 0 27560180
-3 1 27564810
-3 2 27569440
-3 3 27574070
-3 4 27578700
-3 5 27583330
-3 6 27587960
-3 7 27592590
-3 8 27597220
-3 100 28127634
-2 undefined 27019354
-2 0 27550190
-2 1 27554820
-2 2 27559450
-2 3 27564080
-2 4 27568710
-2 5 27573340
-2 6 27577970
-2 7 27582600
-2 8 27587230
-2 100 28118056
-1 undefined 27009596
-1 0 27540200
-1 1 27544830
-1 2 27549460
-1 3 27554090
-1 4 27558720
-1 5 27563350
-1 6 27567980
-1 7 27572610
-1 8 27577240
-1 100 28108478
0 undefined 48373882
0 0 27360312
0 1 31521894
0 2 36761060
0 3 37656424
0 4 44420884
0 5 46135568
0 6 46140456
0 7 46145344
0 8 48391910
0 100 27614746
1 undefined 48424114
1 0 27369992
1 1 31520042
1 2 36773760
1 3 37760996
1 4 44454684
1 5 46175958
1 6 46180846
1 7 46185734
1 8 48404558
1 100 27625192
2 undefined 48419766
2 0 27379672
2 1 31514334
2 2 36766346
2 3 37852056
2 4 44477912
2 5 46179864
2 6 46184752
2 7 46189640
2 8 48481060
2 100 27635638
3 undefined 48406334
3 0 27389352
3 1 31530564
3 2 36795194
3 3 37851432
3 4 44469102
3 5 46165986
3 6 46170874
3 7 46175762
3 8 48479472
3 100 27646084
4 undefined 48421054
4 0 27399032
4 1 31559026
4 2 36800688
4 3 37721824
4 4 44473252
4 5 46186840
4 6 46191728
4 7 46196616
4 8 48479284
4 100 27656530
5 undefined 48443634
5 0 27408712
5 1 31567078
5 2 36814480
5 3 37747032
5 4 44479278
5 5 46199702
5 6 46204590
5 7 46209478
5 8 48427200
5 100 27666976
6 undefined 48465774
6 0 27418392
6 1 31559208
6 2 36809528
6 3 37852504
6 4 44500672
6 5 46211556
6 6 46216444
6 7 46221332
6 8 48487564
6 100 27677422
7 undefined 48470250
7 0 27428072
7 1 31563590
7 2 36831364
7 3 37930896
7 4 44529526
7 5 46232538
7 6 46237426
7 7 46242314
7 8 48541934
7 100 27687868
8 undefined 48462598
8 0 27437752
8 1 31589694
8 2 36840632
8 3 37829104
8 4 44512260
8 5 46227244
8 6 46232132
8 7 46237020
8 8 48521970
8 100 27698314
9 undefined 47853078
9 0 27447432
9 1 31609662
9 2 36850214
9 3 37748908
9 4 44507968
9 5 46223174
9 6 46228062
9 7 46232950
9 8 48477896
9 100 27708760
10 undefined 46007918
10 0 27737620
10 1 32058432
10 2 37259202
10 3 38186858
10 4 44917484
10 5 46666854
10 6 46671794
10 7 46676734
10 8 27607610
10 100 28138060
11 undefined 45967272
11 0 27747610
11 1 32067090
11 2 37258500
11 3 38200250
11 4 44924060
11 5 46667000
11 6 46671940
11 7 27612970
11 8 27617600
11 100 28147638
12 undefined 46006706
12 0 27757600
12 1 32081620
12 2 37258128
12 3 38210922
12 4 44943818
12 5 46674122
12 6 27618330
12 7 27622960
12 8 27627590
12 100 28157216
13 undefined 44336456
13 0 27767590
13 1 32091394
13 2 37258338
13 3 38223522
13 4 44955024
13 5 27623690
13 6 27628320
13 7 27632950
13 8 27637580
13 100 28166794
14 undefined 37692172
14 0 27777580
14 1 32103610
14 2 37291776
14 3 38240926
14 4 27629050
14 5 27633680
14 6 27638310
14 7 27642940
14 8 27647570
14 100 28176372
15 undefined 36697904
15 0 27787570
15 1 32103670
15 2 37309904
15 3 27634410
15 4 27639040
15 5 27643670
15 6 27648300
15 7 27652930
15 8 27657560
15 100 28185950
16 undefined 31474646
16 0 27797560
16 1 32117624
16 2 27639770
16 3 27644400
16 4 27649030
16 5 27653660
16 6 27658290
16 7 27662920
16 8 27667550
16 100 28195528
17 undefined 27274572
17 0 27807550
17 1 27645130
17 2 27649760
17 3 27654390
17 4 27659020
17 5 27663650
17 6 27668280
17 7 27672910
17 8 27677540
17 100 28205106
100 undefined 27475636
100 0 28123698
100 1 28128480
100 2 28133262
100 3 28138044
100 4 28142826
100 5 28147608
100 6 28152390
100 7 28157172
100 8 28161954
100 100 28571464
===*/

/* Test output is megabytes in size so use string checksums.  Enable
 * full prints manually if there's a testcase failure.
 */

function writeDataViewTest(arrayLength) {
    [ -100, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7,
      8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 100 ].forEach(function (offset) {
        [ undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8, 100 ].forEach(function (length) {
            var tmp = [];

            [ -0x100000000, -0xffffffff, -0xdeadbeef,
              -0x80000001, -0x80000000, -0x7fffffff, -0x10000, -0xffff, -0x8001,
              -0x8000, -0x7fff, -0x100, -0xff, -0x81, -0x80, -0x7f, -1, -0, 0, 1,
              0x7f, 0x80, 0x81, 0xff, 0x100, 0x7fff, 0x8000, 0x8001, 0xffff, 0x10000,
              0x7fffffff, 0x80000000, 0x80000001, 0xdeadbeef, 0xffffffff, 0x100000000,
              Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY,

              // Leave NaN intentionally out of the test because its representation
              // varies across platforms and engines.

              2.1, 2.5, 2.9, 3.1, 3.5, 3.9, 4.1, 4.5, 4.9,
              -2.1, -2.5, -2.9, -3.1, -3.5, -3.9, -4.1, -4.5, -4.9,
            ].forEach(function (value) {
                [ 'setInt8', 'setUint8', 'setInt16', 'setUint16',
                  'setInt32', 'setUint32', 'setFloat32', 'setFloat64' ].forEach(function (funcname) {
                    var evalstr;
                    var b, b_u8;
                    var i;
                    var res;

                    b = new ArrayBuffer(arrayLength);
                    b_u8 = new Uint8Array(b);

                    evalstr = 'new DataView(b, ' + offset;
                    if (length !== undefined) {
                        evalstr += ', ' + length;
                    }
                    evalstr += ')';

                    tmp.push(offset + ' ' + value + ' ' + funcname + ' ' + evalstr);
                    try {
                        // workaround because there's no programmatic 'construct' call
                        var v = eval(evalstr);

                        for (i = 0; i < b_u8.length; i++) {
                            b_u8[i] = 0x11;
                        }
                        v[funcname](0, value, true);
                        tmp.push(printableBuffer(b));
                        //print(printableBuffer(b));

                        for (i = 0; i < b_u8.length; i++) {
                            b_u8[i] = 0x11;
                        }
                        v[funcname](0, value, false);
                        tmp.push(printableBuffer(b));
                        //print(printableBuffer(b));

                        for (i = 0; i < b_u8.length; i++) {
                            b_u8[i] = 0x11;
                        }
                        v[funcname](1, value, true);
                        tmp.push(printableBuffer(b));
                        //print(printableBuffer(b));

                        for (i = 0; i < b_u8.length; i++) {
                            b_u8[i] = 0x11;
                        }
                        v[funcname](1, value, false);
                        tmp.push(printableBuffer(b));
                        //print(printableBuffer(b));
                    } catch (e) {
                        tmp.push(e.name);
                        tmp.push(printableBuffer(b));
                        //print(printableBuffer(b));
                    }
                });
            });

            print(offset, length, checksumString(tmp.join('\n')));
        });
    });
}

try {
    print('write DataView test, arrayLength 16');
    writeDataViewTest(16);

    print('write DataView test, arrayLength 17');
    writeDataViewTest(17);
} catch (e) {
    print(e.stack || e);
}

/*===
DataView write return value test
undefined undefined
undefined undefined
undefined undefined
undefined undefined
undefined undefined
undefined undefined
undefined undefined
undefined undefined
===*/

/*
 *  The return value for DataView writes is 'undefined'.  This is unlike
 *  Node.js Buffer which returns (offset + bytes_written).  Since the
 *  underlying implementation is (currently) shared, ensure TypedArray
 *  return value is correct.
 */

function dataViewWriteRetvalTest() {
    var buf = new ArrayBuffer(32);
    var v = new DataView(buf, 12);

    function f(v) {
        print(typeof v, v);
    }

    f(v.setInt8(1, -0x80));
    f(v.setUint8(1, 0xff));
    f(v.setInt16(1, -0x8000));
    f(v.setUint16(1, 0xdead));
    f(v.setInt32(1, -0x80000000));
    f(v.setUint32(1, 0xdeadbeef));
    f(v.setFloat32(1, Math.PI));
    f(v.setFloat64(1, Math.PI));
}

try {
    print('DataView write return value test');
    dataViewWriteRetvalTest();
} catch (e) {
    print(e.stack || e);
}
