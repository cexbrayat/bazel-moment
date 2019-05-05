import { FromNowPipe } from './from-now.pipe';
import * as moment_ from 'moment';
const moment = moment_;

describe('FromNowPipe', () => {

  it('should transform the input', () => {
    const pipe = new FromNowPipe();

    const date = '2019-05-05T08:02:00Z';
    const transformed = pipe.transform(date);

    expect(transformed).toBe(moment(date).fromNow());
  });
});
