export const getResult = async (prompt,setting) => {
  const data = await Promise.all([getImageByPrompt(prompt,setting), getImageByPrompt(prompt,setting)]);
  return data

}

export const getImageByPrompt = async (prompt,setting) => {
const params = {
  width: setting.width || 1024,
  height: setting.height || 1024,
  seed: Math.random().toString(36).substring(2, 9),
  model: setting.model || "turbo",
  // nologo: "true", // Optional
  // transparent: "true", // Optional (for gptimage model)
  // referrer: "MyJSApp", // Optional
};
const encodedPrompt = encodeURIComponent(prompt);
const queryString = new URLSearchParams(params).toString();

const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?${queryString}`;
return url
};


