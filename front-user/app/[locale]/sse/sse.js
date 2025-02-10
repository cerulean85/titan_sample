const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/events", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    let counter = 0;

    const interval = setInterval(() => {

			const data = fs.readFileSync("data.json", "utf8");
			const jd = JSON.parse(data);
			
			
			console.log(jd.send);

			const obj = {
				code: "CODE" + counter,
				date: "2023-01-03 10:11:23",
				manuals: [
					{ name: "조치매뉴얼1.pdf", url: "link1"},
					{ name: "조치방법.jpg", url: "link2"}
				],
				action: "1) 화면을 킨다. <br>2) 조치한다.",
				people: [
					{ name: "아무1", email: "aaa@email.com", phone: "010-1234-1234"},
					{ name: "아무2" + counter, email: "aaa@email.com", phone: "010-1234-1234"},
					{ name: "아무3" + counter, email: "aaa@email.com", phone: "010-1234-1234"}
				]
			}

		
			if (jd.send) {
				
				res.write(`data: ${JSON.stringify(obj)}\n\n`);
			}
			

        counter++;
        
    }, 10000);

    req.on("close", () => {
        clearInterval(interval);
        console.log("Client disconnected");
    });
});

app.listen(PORT, () => {
    console.log(`SSE server running at http://localhost:${PORT}`);
});
