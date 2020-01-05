//constants file
const constants = require('./constants')
//controller
var processImage = require ('./controllers/processImage');
var sendNotification = require ('./controllers/sendNotifcation');
var formatConverter = require('./controllers/formatConverter');
//db operators
var dbOperations = require('./database-adapter/dboperations')
var guest = require('./database-adapter/schema/guests')

//paths
var excelPath = './input.csv'
var input_path = './input_post_cards'
var output_path = './output_post_cards'

main()

async function main()
{
    // await dbconnection()
    // let inputData = await getGuestsData(excelPath)
    // await processGuests(inputData)
    await cloudCards()
}

async function processGuests(inputData){
    await Promise.all(inputData.map(async(el)=>{
        await createPostalCard(el.name)
        await createGuest(el)
    }))
}

let sendObj = {
    body: 'Invitation PDF',
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+919892070791',
    mediaUrl: 'https://res.cloudinary.com/hzec2kbgp/image/upload/v1561693638/l1wb9wrojfmhnw6eikel.png'
}

async function dbconnection(){
    const mongo = constants.mongoose
    const path = mongo.root+mongo.path+mongo.db
    const options = mongo.options
    new dbOperations().connect({path,options})
}

//read From local CSV convert to Json
async function getGuestsData(path){
    return await new formatConverter().csvToJson(path)
}

//save guest to db
async function createGuest(guestInfo){
    await guest.create(guestInfo)
}

//create Postal Cards locally image format
//input input_post_cards
//output output_post_cards
async function createPostalCard(name){
    await new processImage().inImageText({input_path,output_path,name})
}

//merge in pdf form
//input - input_post_cards, output_postcards
//output path --> output_pdf_cards
async function mergeCards(){
    await new processImage().inImageText()
}

function cloudCards(){

}


function notifyGuests(){
    new sendNotification().sendNotification(sendObj)
}



