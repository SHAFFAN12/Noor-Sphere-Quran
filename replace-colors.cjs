const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Dark text replacements -> #0D3B5C
  content = content.replace(/text-primary-dark/g, 'text-[#0D3B5C]');
  content = content.replace(/text-slate-900/g, 'text-[#0D3B5C]');
  content = content.replace(/text-slate-700/g, 'text-[#0D3B5C]');
  content = content.replace(/text-slate-800/g, 'text-[#0D3B5C]');
  content = content.replace(/text-gray-900/g, 'text-[#0D3B5C]');
  content = content.replace(/text-gray-800/g, 'text-[#0D3B5C]');

  // Primary text replacements -> #1668A3
  content = content.replace(/text-blue-500/g, 'text-[#1668A3]');
  content = content.replace(/text-blue-600/g, 'text-[#1668A3]');
  content = content.replace(/text-blue-700/g, 'text-[#1668A3]');
  content = content.replace(/text-primary-blue/g, 'text-[#1668A3]');

  // Light text replacements -> #6FB8EA
  content = content.replace(/text-slate-500/g, 'text-[#6FB8EA]');
  content = content.replace(/text-slate-400/g, 'text-[#6FB8EA]');
  content = content.replace(/text-slate-600/g, 'text-[#6FB8EA]');
  content = content.replace(/text-gray-500/g, 'text-[#6FB8EA]');
  content = content.replace(/text-gray-400/g, 'text-[#6FB8EA]');
  content = content.replace(/text-gray-600/g, 'text-[#6FB8EA]');
  content = content.replace(/text-gray"/g, 'text-[#6FB8EA]"'); // App.css class
  
  // also handle placeholder
  content = content.replace(/placeholder-slate-400/g, 'placeholder-[#6FB8EA]');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Replaced text colors successfully!');
