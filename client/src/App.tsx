import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.scss";
import "./style/scrapeforimages.scss";
import "./style/metaData.scss";
import "./style/scrapeForBarcodes.scss";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";




function App() {
  const [selectedImage, setSelectedImage] = useState('');
  const [barcodeSelect, setBarcodeSelect] = useState('');



  const handleImageSelect = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    console.log(setSelectedImage);
  };
  const handlebarcodeSelect = (imageSrc: string) => {
    setBarcodeSelect(imageSrc);
    console.log(setBarcodeSelect);
  };


function handleSubmit(ev: any) {
    try {
      ev.preventDefault();
      const description = ev.target.elements.description.value;
      const isoCode = ev.target.elements.iso.value;
      const fluidSpeed = ev.target.elements.fluidSpeed.value;

      if (!description) throw new Error("No description");
      if (!isoCode) throw new Error("No iso Code");
      if (!fluidSpeed) throw new Error("No Fluid Speed");
      if (!selectedImage || !barcodeSelect)
        throw new Error("No Image or Barcode selected");
      const BottleData: any = {
        selectedImage,
        barcodeSelect,
        fluidSpeed,
        description,
        isoCode,
      };

        console.log(BottleData);
      } catch (error: any) {
        console.error(error.message);
      }
    }
    
    
    return (
      <div className="App">
      <h1>NINA - CREATE A BOTTLE</h1>
      <form onSubmit={handleSubmit}>
        <div className="component-container">
          <div className="container">
            <div className="container__image">
              <button type="button" onClick={() => handleImageSelect('https://i.guim.co.uk/img/media/89cde8eed93ae1d7cae30d14816af8cffa36fac6/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=4a83770a968d7792a7c9e0af06b2fa31')}>
                <img
                  src="https://i.guim.co.uk/img/media/89cde8eed93ae1d7cae30d14816af8cffa36fac6/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=4a83770a968d7792a7c9e0af06b2fa31"
                  alt=""
                  className={`image ${selectedImage === 'https://i.guim.co.uk/img/media/89cde8eed93ae1d7cae30d14816af8cffa36fac6/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=4a83770a968d7792a7c9e0af06b2fa31' ? 'selected' : ''}`}
                />
              </button>
            </div>
            <div className="container__image">
              <button type="button" onClick={() => handleImageSelect(`https://res.cloudinary.com/hjqklbxsu/image/upload/f_auto,fl_lossy,q_auto/v1629127526/product/bottle/d/JD%20US%2010%20Year%20Old%20Tennessee%20Whiskey%20Transparent.png`)}>
                <img
                  src="https://res.cloudinary.com/hjqklbxsu/image/upload/f_auto,fl_lossy,q_auto/v1629127526/product/bottle/d/JD%20US%2010%20Year%20Old%20Tennessee%20Whiskey%20Transparent.png"
                  alt=""
                  className={`image ${selectedImage === 'https://i.guim.co.uk/img/media/89cde8eed93ae1d7cae30d14816af8cffa36fac6/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=4a83770a968d7792a7c9e0af06b2fa31' ? 'selected' : ''}`}
                />
              </button>
            </div>
            <div className="container__image">
              <button type="button" onClick={() => handleImageSelect(`https://pixboost.com/api/2/img/https://productionbhsstorage.blob.core.windows.net/cms-media-storage/assets/26954_9a239cd9d7.png/optimise?auth=Mjk3MjY0ODMzMw__`)}>
                <img
                  src="https://pixboost.com/api/2/img/https://productionbhsstorage.blob.core.windows.net/cms-media-storage/assets/26954_9a239cd9d7.png/optimise?auth=Mjk3MjY0ODMzMw__"
                  alt=""
                  className={`image ${selectedImage === 'https://i.guim.co.uk/img/media/89cde8eed93ae1d7cae30d14816af8cffa36fac6/0_0_1000_1000/master/1000.jpg?width=700&quality=85&auto=format&fit=max&s=4a83770a968d7792a7c9e0af06b2fa31' ? 'selected' : ''}`}
                />
              </button>
            </div>

            <button type="button" className="RecycleIcon">
              <FontAwesomeIcon icon={faRecycle} className="icon" />
            </button>
            <button>
            {selectedImage && (
          <div>
            <h3>Selected Image:</h3>
            <img src={selectedImage} alt="Selected" width="200" height="200" />
          </div>
        )}
            </button>
          </div>
        </div>
        <div className="component-container">
          <div className="container">
            <div className="container__image">
              <p>500ML</p>
              <button type="button" onClick={() => handlebarcodeSelect('https://barcode-list.com/barcodeImage.php?barcode=5099873089712')}>
                <img
                  src="https://barcode-list.com/barcodeImage.php?barcode=5099873089712"
                  alt=""
                  className={`image ${barcodeSelect === 'https://barcode-list.com/barcodeImage.php?barcode=5099873089712' ? 'selected' : ''}`}
                />
              </button>
            </div>
            <div className="container__image">
              <p>750ML</p>
              <button type="button" onClick={() => handlebarcodeSelect('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png')}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png"
                  alt="750"
                  className={`image ${barcodeSelect === 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png' ? 'selected' : ''}`}
                />
              </button>
            </div>
            <div className="container__image">
              <p>1000ML</p>
              <button type="button" onClick={() => handlebarcodeSelect('https://media.istockphoto.com/id/1166257074/vector/barcode-vector-icon-in-flat-style.jpg?s=612x612&w=0&k=20&c=1galRqeTsqmf1QBV7581hFi5YY7wQOG6oq5GHHdTOTA=')}>
                <img
                  src="https://media.istockphoto.com/id/1166257074/vector/barcode-vector-icon-in-flat-style.jpg?s=612x612&w=0&k=20&c=1galRqeTsqmf1QBV7581hFi5YY7wQOG6oq5GHHdTOTA="
                  alt="1000"
                  className={`image ${barcodeSelect === 'https://media.istockphoto.com/id/1166257074/vector/barcode-vector-icon-in-flat-style.jpg?s=612x612&w=0&k=20&c=1galRqeTsqmf1QBV7581hFi5YY7wQOG6oq5GHHdTOTA=' ? 'selected' : ''}`}
                />
              </button>
            </div>
            <button>

            {barcodeSelect && (
              <div>
            <h3>Selected Image:</h3>
            <img src={barcodeSelect} alt="Selected" width="200" height="200" />
          </div>
        )}
        </button>
            </div>
        </div>
        <div className="component-container">
          <div>
            <div className="divResult">
              <label>Fluid Speed:</label>
            <p className="result">get result...</p>
              <input name="fluidSpeed" />
            </div>
          </div>
        </div>
        <div className="component-container">
          <div className="metadata-container">
              <h1>Meta data:</h1>
            <div className="metadata-field">
              <label className="text">Description:</label>
              <textarea name="description" className="textarea" />
            </div>
            <div className="metadata-field">
              <label className="text">ISO code:</label>
              <textarea name="iso" className="textarea" />
            </div>
          </div>
        </div>
        <div className="component-container">
        <input
            type="submit"
            value="Submit"
            className="submit"
            disabled={!selectedImage || !barcodeSelect}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
