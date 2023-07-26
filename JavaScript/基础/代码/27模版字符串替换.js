const renderTemplate = (template, data) => {
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
        return data[key.trim()] || ''
    })
}
console.log(renderTemplate("Hello, my name is {{name}} and I am {{age}} years old.", { name: "John", age: 30 }))