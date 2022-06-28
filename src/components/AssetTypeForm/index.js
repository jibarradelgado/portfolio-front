import React from "react";

export const AssetTypeForm = (name="") => {
  <div>
    <form>
      <label for="type_name">Asset Type</label>
      <input type="text" id="type_name" name="type_name" />
      <label for="percentage">Target percentage</label>
      <input type="number" id="percentage" name="percentage" min="0" max="100" />
      <label for="threshold">Target threshold</label>
      <input type="threshold" id="threshold" name="threshold" min="0" max="100" />
    </form>
  </div>
}