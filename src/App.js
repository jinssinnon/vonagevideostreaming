import React, { useEffect } from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

const apiKey = '';
const sessionId = '';
const token = '';

const App = () => {
  useEffect(() => {
    // Initialize Vonage Video session with your API credentials
  }, []);

  return (
    <div>
    <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
      {/* <OTPublisher /> */}
      <OTStreams>
        <OTSubscriber />
      </OTStreams>
    </OTSession>
  </div>
  );
}

export default App;
