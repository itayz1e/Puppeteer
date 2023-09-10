import "../style/metaData.scss";

function MetaData() {
  return (
    <div className="metadata-container">
      <div className="metadata-field">
        <label className="text">Description:</label>
        <textarea name="Description" className="textarea" />
      </div>
      <div className="metadata-field">
        <label className="text">ISO code:</label>
        <textarea name="ISO" className="textarea" />
      </div>
    </div>
  );
}

export default MetaData;
