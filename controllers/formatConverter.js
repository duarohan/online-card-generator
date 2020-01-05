let csvToJson = require('convert-csv-to-json');

class FormatConverter{

    csvToJson(fromPath){
        return csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv(fromPath);
    }

    imagesToPdf(fromPath){

    }
    
}


module.exports = FormatConverter