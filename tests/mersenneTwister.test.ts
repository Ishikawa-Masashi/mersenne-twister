import { MersenneTwister } from '../src';
import { describe, expect, it } from 'vitest';

// https://magicant.github.io/sjavascript/mt.html

describe('MersenneTwister', () => {
  it('乱数生成テスト', () => {
    const mt = new MersenneTwister([0x123, 0x234, 0x345, 0x456]);

    expect(mt.nextInt()).toEqual(1067595299);
    expect(mt.nextInt()).toEqual(955945823);
    expect(mt.nextInt()).toEqual(477289528);
    expect(mt.nextInt()).toEqual(4107218783);
    expect(mt.nextInt()).toEqual(4228976476);
    expect(mt.nextInt()).toEqual(3344332714);
    expect(mt.nextInt()).toEqual(3355579695);
    expect(mt.nextInt()).toEqual(227628506);
    expect(mt.nextInt()).toEqual(810200273);
    expect(mt.nextInt()).toEqual(2591290167);
    expect(mt.nextInt()).toEqual(2560260675);
    expect(mt.nextInt()).toEqual(3242736208);
    expect(mt.nextInt()).toEqual(646746669);
    expect(mt.nextInt()).toEqual(1479517882);
    expect(mt.nextInt()).toEqual(4245472273);
    expect(mt.nextInt()).toEqual(1143372638);
    expect(mt.nextInt()).toEqual(3863670494);
    expect(mt.nextInt()).toEqual(3221021970);
    expect(mt.nextInt()).toEqual(1773610557);
    expect(mt.nextInt()).toEqual(1138697238);

    expect(mt.next()).toEqual(0.3310613579725882);
    expect(mt.next()).toEqual(0.6658802808137323);
    expect(mt.next()).toEqual(0.9021936127785443);
    expect(mt.next()).toEqual(0.016891781650972937);
    expect(mt.next()).toEqual(0.6054105963840144);
    expect(mt.next()).toEqual(0.6502730486458488);
    expect(mt.next()).toEqual(0.14105854230491355);
    expect(mt.next()).toEqual(0.16650583422091114);
    expect(mt.next()).toEqual(0.30802692461591674);
    expect(mt.next()).toEqual(0.3248199587299294);
    expect(mt.next()).toEqual(0.48934664479289425);
    expect(mt.next()).toEqual(0.6869515209417516);
    expect(mt.next()).toEqual(0.6741796549553253);
    expect(mt.next()).toEqual(0.23378341289753435);
    expect(mt.next()).toEqual(0.49156192506665863);
    expect(mt.next()).toEqual(0.950513579332625);
    expect(mt.next()).toEqual(0.5713756893851204);
    expect(mt.next()).toEqual(0.19455473543387525);
    expect(mt.next()).toEqual(0.6368395475753994);
    expect(mt.next()).toEqual(0.5064554768524573);
  });
});
