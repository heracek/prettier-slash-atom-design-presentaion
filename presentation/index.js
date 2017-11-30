// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link,
  Layout,
  Fill,
  Fit,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide>
          <Layout>
            <Heading fit size={1} textColor="secondary">
              Prettier / Atomic&nbsp;Design
            </Heading>
          </Layout>
          <Text size={6} margin="20px 0 0">
            Tomáš Horáček (@heracek)
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor="secondary">
            Code Style Problems
          </Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            Code Style Problems:
          </Heading>
          <List>
            <Appear>
              <ListItem textSize={30}>
                <strong>fixing linter errors</strong>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>
                can this fix everithing: <code>"eslint --fix"</code>?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>
                <strong>fight in code reviews</strong>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>is it effective?</ListItem>
            </Appear>
          </List>
          <Appear>
            <Image src={require('../assets/money-wasted.gif')} />
          </Appear>
        </Slide>
        <Slide transition={['zoom']}>
          <Image
            src={require('../assets/prettier-icon.png')}
            width={256}
            height={256}
          />
          <Heading size={1} lineHeight={1} textColor="secondary">
            Prettier
          </Heading>
          <Text margin="10px 0 0" size={1}>
            <Link size={1} href="https://prettier.io/">
              https://prettier.io/
            </Link>
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} textColor="secondary">
            Prettier
          </Heading>
          <Heading size={5} textColor="secondary">
            JavaScript<sup>*</sup> Code Formatter
          </Heading>
          <List>
            <Appear>
              <ListItem textSize={30}>
                <strong>JavaScript:</strong> ES2017, JSX, Flow, TypeScript, JSON
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>
                <strong>CSS:</strong> CSS3+, Less, SCSS, styled-components,
                styled-jsx
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>
                <strong>GraphQL:</strong> GraphQL, GraphQL Schemas
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>
                <strong>Markdown:</strong> CommonMark, GitHub Flavored Markdown
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>More is coming...</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <List>
            <Appear>
              <ListItem>command line tool</ListItem>
            </Appear>
            <Appear>
              <ListItem>editor integration</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                (almost) no configuration
                <CodePane
                  textSize={20}
                  lang="yaml"
                  source={require('raw-loader!../assets/.prettierrc.yaml')}
                  margin="20px auto"
                  overflow="overflow"
                />
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link size={1} href="https://prettier.io/">
                  https://prettier.io/
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          ?
        </Slide>
        <Slide>
          <Appear>
            <Heading size={1} textColor="secondary">
              Component Organization Problems
            </Heading>
          </Appear>
          <hr />
          <Appear>
            <Heading size={1} textColor="secondary" normal>
              Component Reuse Problems
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Image
                src={require('../assets/book-cover.svg')}
                width={700}
                height={700}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote>
              We’re not designing pages, we’re designing systems of components.
            </Quote>
            <Cite>Stephen Hay</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={require('../assets/html-periodic-table.png')} />
        </Slide>
        <Slide>
          <Image src={require('../assets/chemical-equation.png')} />
        </Slide>
        <Slide>
          <Image src={require('../assets/atomic-design-process.png')} />
        </Slide>
        <Slide>
          <Link href="https://kalutheo.github.io/elm-ui-explorer/examples/design-system/explorer/">
            Atomc Design demo
            <br />
            <br />
            https://kalutheo.github.io/elm-ui-explorer/examples/design-system/explorer/
          </Link>
        </Slide>
        <Slide>
          <Link href="http://atomicdesign.bradfrost.com/">
            free Atomic Design book
            <br />
            <br />
            http://atomicdesign.bradfrost.com/
          </Link>
        </Slide>
        <Slide>
          <Text bold>thanks!</Text>
        </Slide>
      </Deck>
    );
  }
}
