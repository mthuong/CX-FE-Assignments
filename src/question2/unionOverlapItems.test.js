import { unionOverlapItems } from './unionOverlapItems';

describe('unionOverlapItems unittest', () => {
  test('should return 2 items, 2 last items merge together', () => {
    const input = [
      { startPx: 50, endPx: 90 },
      { startPx: 10, endPx: 30 },
      { startPx: 20, endPx: 40 }
    ];
    const expected = [{
      endPx: 90,
      startPx: 50
    }, {
      endPx: 40,
      startPx: 10
    }];
  
    const output = unionOverlapItems(input);
    expect(output.length).toEqual(expected.length);
    expect(output).toMatchObject(expected);
  });
  
  test('3 items overlap should return 1 item', () => {
    const input = [
      { startPx: 10, endPx: 90 },
      { startPx: 10, endPx: 30 },
      { startPx: 20, endPx: 40 }
    ];
    const expected = [{
      endPx: 90,
      startPx: 10
    }];
  
    const output = unionOverlapItems(input);
    expect(output.length).toEqual(expected.length);
    expect(output).toMatchObject(expected);
  });
  
  test('head overlap should return 2 item', () => {
    const input = [
      { startPx: 10, endPx: 30 },
      { startPx: 10, endPx: 20 },
      { startPx: 40, endPx: 50 }
    ];
    const expected = [{
      endPx: 30,
      startPx: 10
    }, {
      endPx: 50,
      startPx: 40
    }];
  
    const output = unionOverlapItems(input);
    expect(output.length).toEqual(expected.length);
    expect(output).toMatchObject(expected);
  });
  
  test('empty input should return empty array', () => {
    const input = [];
    const expected = [];
  
    const output = unionOverlapItems(input);
    expect(output.length).toEqual(expected.length);
    expect(output).toMatchObject(expected);
  });
  
  test('should return same array', () => {
    const input = [{ startPx: 40, endPx: 50 }];
    const expected = [{ startPx: 40, endPx: 50 }];
  
    const output = unionOverlapItems(input);
    expect(output.length).toEqual(expected.length);
    expect(output).toMatchObject(expected);
  });
  
  test('should merge all and return 1 item', () => {
    const input = [
      { startPx: 10, endPx: 20 },
      { startPx: 10, endPx: 30 },
      { startPx: 20, endPx: 40 },
      { startPx: 40, endPx: 50 },
      { startPx: 50, endPx: 50 },
    ];
    const expected = [{
      endPx: 50,
      startPx: 10
    }];
  
    const output = unionOverlapItems(input);
    expect(output.length).toEqual(expected.length);
    expect(output).toMatchObject(expected);
  });
  
  test('last item overlap previous items should return 1 item', () => {
    const input = [
      { startPx: 10, endPx: 20 },
      { startPx: 5, endPx: 60 },
    ];
    const expected = [{
      endPx: 60,
      startPx: 5
    }];
  
    const output = unionOverlapItems(input);
    expect(output.length).toEqual(expected.length);
    expect(output).toMatchObject(expected);
  });
  
  test('items not overlap should the same items', () => {
    const input = [
      { startPx: 5, endPx: 15 },
      { startPx: 40, endPx: 30 },
    ];
    const expected = [{
      endPx: 15,
      startPx: 5
    }, {
      endPx: 30,
      startPx: 40
    }];
  
    const output = unionOverlapItems(input);
    expect(output.length).toEqual(expected.length);
    expect(output).toMatchObject(expected);
  });
  
  test('items overlap head should merge and return 1 item', () => {
    const input = [
      { startPx: 10, endPx: 20 },
      { startPx: 5, endPx: 15 },
    ];
    const expected = [{
      endPx: 20,
      startPx: 5
    }];
  
    const output = unionOverlapItems(input);
    expect(output.length).toEqual(expected.length);
    expect(output).toMatchObject(expected);
  });
});
