const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Revert the scripted changes
  content = content.replace(/text-\[\#0D3B5C\]/g, 'text-primary-dark');
  content = content.replace(/text-\[\#1668A3\]/g, 'text-blue-500');
  content = content.replace(/text-\[\#6FB8EA\]/g, 'text-slate-500');
  content = content.replace(/placeholder-\[\#6FB8EA\]/g, 'placeholder-slate-400');
  
  // Revert text-[#1668A3]" to "text-gray" in App.css classes like Events/Programs
  content = content.replace(/text-slate-500"/g, 'text-gray"');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Reverted text colors successfully!');
