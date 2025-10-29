import React from "react";

export function getFormattedFileName(id) {
  return id.toString().padStart(3, "0") + ".png";
}
