export function readJson(path) {
    const json = require("./" + path);
    const model = Object.entries(json);


    const models = [];
    const instances = [];
    for (let i = 0; i < model.length; i++) {
        const obj = {
        name: model[i][0],
        type: model[i][1].type,
        filepath: model[i][1].filepath,
        pointCloud: model[i][i].pointCloud
      };
      switch (obj.type) {
        case "model":
            models.push(obj);
          break;
        case "instance":
            instances.push(obj);
          break;
        default:
          break;
      }
    }
    return {models, instances}
}