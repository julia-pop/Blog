{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },

  "ignorePatterns": ["node_modules", "dist", "build"],
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react-hooks/recommended",
    "airbnb",
    "prettier"
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "es6": true,
    "requireConfigFile": false,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["import","react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/state-in-constructor": 0,
    "no-restricted-syntax": 0,
    "no-plusplus": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/destructuring-assignment": 0,
    "jsx-a11y/no-autofocus": 0,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "no-else-return": 0,
    "react/button-has-type": 0,
    "react/static-property-placement": 0,
    "react/self-closing-comp": "off",
    "react/prefer-stateless-function": "off",
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "react/default-props-match-prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "no-named-as-default": "off",
    "no-param-reassign":"off",
    "indent": ["error", 2],
    "prettier/prettier": "off",
    "linebreak-style": [0, "unix"],
    "quotes": 0,
    "semi": 0,
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "import/no-unresolved": [2, { "caseSensitive": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/order": [
      2,
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  }
}