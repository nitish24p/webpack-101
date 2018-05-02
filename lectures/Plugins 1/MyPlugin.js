function MyPlugin() {
  this.chunkVersions = {};
}

MyPlugin.prototype.apply = function (compiler) {
  compiler.hooks.emit.tap('MyPlugin', params => {
    const changedChunks = params.chunks.filter((chunk) => {
       console.log(this.chunkVersions);
       const oldVersion = this.chunkVersions[chunk.name];
       this.chunkVersions[chunk.name] = chunk.hash;
       return chunk.hash !== oldVersion;
     });

    console.log("----------CHANGED__CHUNKS----------");
    console.log(changedChunks.map(chunk => chunk.name));
    console.log("----------CHANGED__CHUNKS----------");
  })
    
};

module.exports = MyPlugin;