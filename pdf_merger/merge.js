let PDFMerger;

const loadPDFMerger = async () => {
  const module = await import('pdf-merger-js');
  PDFMerger = module.default;
};

const mergepdfs = async (p1, p2) => {
  await loadPDFMerger();
  const merger = new PDFMerger();
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2

  // Set metadata
  await merger.setMetadata({
    producer: "pdf-merger-js based script",
    author: "John Doe",
    creator: "John Doe",
    title: "My life as John Doe"
  });

  await merger.save('public/merged.pdf'); //save under given name and reset the internal document
};

module.exports = { mergepdfs };