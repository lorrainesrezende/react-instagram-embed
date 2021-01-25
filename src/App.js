import React from "react"; 
import './App.css';
import InstagramEmbed from "react-instagram-embed";

function App() {
  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"center"}}>
        <InstagramEmbed
            url='https://www.instagram.com/p/Zw9o4/'
            clientAccessToken='123|456'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
      </div>
    </div>
  );
}

export default App;