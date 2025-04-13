import {View} from 'react-native';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Story />
    </View>
  ),
];
