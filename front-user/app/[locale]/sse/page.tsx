"use client";
import { useEffect, useState } from "react";

interface AlarmProp {
  code: string;
  date: string;
  manuals: {  name: string, url: string }[];
  action: string;
  people: { name: string, email: string, phone: string }[];
}

export default function SSEPage() {
  const [message, setMessage] = useState<AlarmProp>();

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:4000/events");

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      setMessage(data);
    };

    eventSource.onerror = (err) => {
      console.error("SSE Error:", err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>SSE Messages</h1>
      <div>{message?.code}</div>
      <div>{message?.date}</div>
      <div>매뉴얼</div>
      {message?.manuals.map((d:any, i:any) => (
        <div>
          <div>{d.name}</div>
          <div>{d.url}</div>
        </div>
      ))}
      <div>{message?.action}</div>
      <div>People</div>
      {message?.people.map((d:any, i:any) => (
        <div>
          <div>{d.name}</div>
          <div>{d.email}</div>
          <div>{d.phone}</div>
        </div>
      ))}

      
    </div>
  );
}
