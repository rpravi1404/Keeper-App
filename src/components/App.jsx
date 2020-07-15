import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// (note)=>{
//     return( <Note id={note.id} title={note.title} content={note.title} /> )
// }

function App(){
    return(
        <div>
            <Header />
            {notes.map(note => (
                <Note 
                key={note.key} 
                title={note.title} 
                content={note.title} 
                />
                )
                )
            }
            <Footer />
        </div>
    );
};

export default App;