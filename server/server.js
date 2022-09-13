let express = require('express');
let bodyParser = require('body-parser')

const port = process.env.PORT || 5000;
let Msg = `Server is listening on port ${port} tt...`;
const webfolder = 'dist';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(webfolder));
app.get('*',(resq,res)=>{
    res.sendFile('index.html',{root:webfolder})
});


let server =app.listen(port, () =>
console.log(Msg)
);

module.exports=server;