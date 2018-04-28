module.exports = function (wallaby) {
    return {
      files: [
        'kata.js'
      ],
  
      tests: [
        'test.js'
      ],
  
      testFramework: 'mocha',
      env: {
        type: 'node'
      },
    };
  };