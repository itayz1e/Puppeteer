import React, { useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState<string>(''); // Initialize with an empty string

  const handleImageSelect = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };



  return (
    <div className="App">
      <h1>NINA - CREATE A BOTTLE</h1>
      <form>
        {/* ... Rest of your form ... */}
        <div className="container__image">
          <button onClick={() => handleImageSelect('https://i.guim.co.uk/img/media/89cde8eed93ae1d7cae30d14816af8cffa36fac6/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=4a83770a968d7792a7c9e0af06b2fa31')}>
            <img
              src="https://i.guim.co.uk/img/media/89cde8eed93ae1d7cae30d14816af8cffa36fac6/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=4a83770a968d7792a7c9e0af06b2fa31"
              alt=""
              className={`image ${selectedImage === 'https://i.guim.co.uk/img/media/89cde8eed93ae1d7cae30d14816af8cffa36fac6/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=4a83770a968d7792a7c9e0af06b2fa31' ? 'selected' : ''}`}
            />
          </button>
        </div>
        {/* ... Repeat the same pattern for the other two images ... */}
        {/* Add a visual indicator to the selected image */}
        {selectedImage && (
          <div>
            <h3>Selected Image:</h3>
            <img src={selectedImage} alt="Selected" width="200" />
          </div>
        )}
        {/* Rest of your form */}
      </form>
    </div>
  );
}

export default App;
