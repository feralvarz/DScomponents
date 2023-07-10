import { render } from '@testing-library/react';
import { Typography } from '../typography';

const exampleText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a.
Praesent tristique magna sit amet purus gravida quis blandit. Convallis posuere morbi leo urna molestie at.
Arcu non sodales neque sodales ut etiam sit amet nisl. Pellentesque sit amet porttitor eget. Vitae ultricies leo integer malesuada nunc vel.
Commodo nulla facilisi nullam vehicula ipsum a. Bibendum arcu vitae elementum curabitur vitae.
Facilisis gravida neque convallis a. Odio eu feugiat pretium nibh. Sed vulputate odio ut enim blandit volutpat maecenas.
Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum odio eu feugiat pretium nibh ipsum. Fames ac turpis egestas sed tempus.
Mi eget mauris pharetra et ultrices neque ornare.

Cursus eget nunc scelerisque viverra mauris in aliquam sem. Pulvinar mattis nunc sed blandit libero volutpat sed.
Pellentesque nec nam aliquam sem et. Vitae turpis massa sed elementum tempus. Et malesuada fames ac turpis egestas maecenas. Pharetra diam sit amet nisl suscipit.
Arcu felis bibendum ut tristique et. Tristique senectus et netus et malesuada fames.
Et malesuada fames ac turpis. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Elementum nisi quis eleifend quam adipiscing vitae.
Condimentum id venenatis a condimentum vitae sapien pellentesque. Et tortor at risus viverra adipiscing at in tellus. Donec pretium vulputate sapien nec sagittis.
Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.
`;

xdescribe('Typography', () => {
  it('renders', () => {
    const { container } = render(<Typography />);
    expect(container).toMatchSnapshot();
  });

  it('renders with props', () => {
    const { container } = render(
      <Typography align="center" leading="normal" variant="h1" gutterBottom noWrap>
        {exampleText}
      </Typography>,
    );
    expect(container).toMatchSnapshot();
  });
});
