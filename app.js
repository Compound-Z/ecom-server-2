const express = require('express')
const app = express()
//morgan: http request logger
const morgan = require('morgan')


/*USE*/
app.use(morgan('tiny'))


app.get('/', (req, res) => {
	res.send('OKE')
})


const port = process.env.PORT || 5000
const start = async () => {
	try {
		app.listen(port, () => {
			console.log(`Server is running at ${port}...`);
		})
	} catch (error) {
		console.log(`Error while starting server: ${error}`);
	}
}
start()