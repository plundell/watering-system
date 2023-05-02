import express, { Request, Response } from 'express';
import * as commands from './commands';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const handleCommand = async (req: Request, res: Response, command: keyof typeof commands) => {
	try {
		await commands[command](req.body);
		res.status(200).send(`${command.charAt(0).toUpperCase() + command.slice(1)} process completed`);
	} catch (error) {
		res.status(500).send(`Error: ${error.message}`);
	}
};

app.post('/water', (req, res) => handleCommand(req, res, 'water'));
app.post('/air', (req, res) => handleCommand(req, res, 'air'));

// Add other routes for the remaining commands

app.listen(port, () => {
	console.log(`Watering system server is running on port ${port}`);
});
