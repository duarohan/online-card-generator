var Jimp = require('jimp');

class ImageProcessing{
    constructor(){}
    
    async loadFont(){
        return await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    }

    async inImageText({input_path,output_path,name}){
        try {
                let font = await this.loadFont()
                let image = await Jimp.read(`${input_path}/postcard.jpeg`)
                await image.print(font, 120, 310, name)
                await image.write(`${output_path}/${name} card.jpeg`)
            } catch (e) {
                console.log('Error in Image Processing', e)
            }
    }
    
}

module.exports = ImageProcessing

