import { useState, useEffect } from "react";
import "../App.css";
const TextUtils = () => {

    useEffect(() => {
        setText(localStorage.getItem("text") ?? "")
        setCount(localStorage.getItem("count") ?? 0)
        setCountWords(localStorage.getItem("countWords") ?? 0)
        setSecond(localStorage.getItem("second") ?? 0)
    }, []);

    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [countWords, setCountWords] = useState(0);
    const [second, setSecond] = useState(0);
    return (
        <>
            <div className="container">
                <div>
                    <h2 className="text-center p-3">Text-Utils Example</h2>
                </div>
                <div className="form-floating m-3">
                    <textarea value={text} onChange={(e) => {
                        setText(e.target.value)
                        localStorage.setItem("text", text);
                    }} className="form-control" placeholder="Enter Text Here" id="floatingTextarea2" style={{ height: 200 }}></textarea>
                    <label htmlFor="floatingTextarea2"></label>
                </div>
                <div className="px-3">
                    <button onClick={() => {
                        setText(text.toUpperCase())
                        localStorage.setItem("text", text.toUpperCase());
                    }} className="mx-1 btn btn-primary">To Uppercase</button>

                    <button onClick={() => {
                        setText(text.toLowerCase());
                        localStorage.setItem("text", text.toLowerCase());
                    }} className="mx-1 btn btn-warning">To Lowercase</button>

                    <button onClick={() => {
                        setCount(text.length);
                        localStorage.setItem("count", text.length.toString())
                    }} className="mx-1 btn btn-info">To Count Latters</button>

                    <button onClick={() => {
                        setCountWords(text.split(" ").length);
                        localStorage.setItem("countWords", text.split(" ").length.toString())
                    }} className="mx-1 btn btn-success">To Count Words</button>

                    <button onClick={() => {
                        setSecond((text.split(" ").length * 60) / 180)
                        localStorage.setItem("second", ((text.split(" ").length * 60) / 180).toString())
                    }} className="mx-1 btn btn-secondary">Conunt Second</button>

                    <button onClick={() => {
                        setText(" ");
                        setCount(0)
                        setCountWords(0)
                        setSecond(0)
                        localStorage.clear();
                    }} className="mx-1 btn btn-danger">Clear Text</button>
                </div>
                <hr />
                <div>

                    <p>{text}</p>
                    <p>Text Count : {count}</p>
                    <p>Word Count : {countWords}</p>
                    <p>Reading time : {second} s</p>
                </div>
            </div>
        </>
    );
};

export default TextUtils;


