export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} could not be processed`));
}
