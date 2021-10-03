import round from 'src/helpers/round'

describe('round', () => {

  it('it rounds values for 2 digits that are not 0 post decimal point', () => {
    expect(round(1)).toEqual(1.00)
    expect(round(1, 'down')).toEqual(1.00)
    expect(round(1.9)).toEqual(1.9)
    expect(round(1.9, 'down')).toEqual(1.9)
    expect(round(1231.23)).toEqual(1231.23)
    expect(round(1231.23, 'down')).toEqual(1231.23)
    expect(round(1231.29)).toEqual(1231.29)
    expect(round(1231.29, 'down')).toEqual(1231.29)
    expect(round(1231.221)).toEqual(1231.23)
    expect(round(1231.221, 'down')).toEqual(1231.22)
    expect(round(1231.221421)).toEqual(1231.23)
    expect(round(1231.221421, 'down')).toEqual(1231.22)
    expect(round(0.003987268811872672)).toEqual(0.004)
    expect(round(0.003987268811872672, 'down')).toEqual(0.0039)
    expect(round(0.003097268811872672)).toEqual(0.0031)
    expect(round(0.003097268811872672, 'down')).toEqual(0.0030)
    expect(round(0.3)).toEqual(0.3)
    expect(round(0.3, 'down')).toEqual(0.3)
    expect(round(0.31)).toEqual(0.31)
    expect(round(0.31, 'down')).toEqual(0.31)
    expect(round(0.313)).toEqual(0.32)
    expect(round(0.313, 'down')).toEqual(0.31)
    expect(round(0.3134)).toEqual(0.32)
    expect(round(0.3131, 'down')).toEqual(0.31)
    expect(round(0.03)).toEqual(0.03)
    expect(round(0.03, 'down')).toEqual(0.03)
    expect(round(0.031)).toEqual(0.031)
    expect(round(0.031, 'down')).toEqual(0.031)
    expect(round(0.0313)).toEqual(0.032)
    expect(round(0.0313, 'down')).toEqual(0.031)
    expect(round(0.003)).toEqual(0.003)
    expect(round(0.003, 'down')).toEqual(0.003)
    expect(round(0.0031)).toEqual(0.0031)
    expect(round(0.0031, 'down')).toEqual(0.0031)
    expect(round(0.00313)).toEqual(0.0032)
    expect(round(0.00313, 'down')).toEqual(0.0031)
    expect(round(0.00003)).toEqual(0.00003)
    expect(round(0.00003, 'down')).toEqual(0.00003)
  });
});