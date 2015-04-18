var fs = Npm.require('fs');

semanticUiDataPackage = {};

semanticUiDataPackage.getTextFile = function (filePath) {
  return Assets.getText(filePath);
};

semanticUiDataPackage.getBinaryFile = function (filePath) {
  return Assets.getBinary(filePath);
};
