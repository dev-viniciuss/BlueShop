import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({

  container: {
    backgroundColor: GlobalColors.colorBackground,

    paddingVertical: 42,
    paddingHorizontal: 30,

  },

  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    fontSize: 18,
    fontFamily: "OleoScript_700Bold",

    color: GlobalColors.colorContainer,
  },

});

export default styles;