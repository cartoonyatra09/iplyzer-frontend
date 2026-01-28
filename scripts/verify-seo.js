#!/usr/bin/env node

/**
 * SEO Verification Script
 * Checks if all required SEO files and configurations are in place
 */

const fs = require('fs');
const path = require('path');

const checks = {
  passed: [],
  failed: [],
  warnings: []
};

console.log('🔍 IPlyzer SEO Verification\n');
console.log('=' .repeat(50));

// Check required files
const requiredFiles = [
  'app/layout.tsx',
  'app/robots.ts',
  'app/sitemap.ts',
  'app/manifest.ts',
  'next.config.ts',
  '.env.local'
];

console.log('\n📁 Checking Required Files...\n');
requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    checks.passed.push(`✅ ${file}`);
    console.log(`✅ ${file}`);
  } else {
    checks.failed.push(`❌ ${file}`);
    console.log(`❌ ${file} - MISSING`);
  }
});

// Check required images
const requiredImages = [
  'public/favicon.ico',
  'public/icon-192.png',
  'public/icon-512.png',
  'public/apple-icon.png',
  'public/og-image.png',
  'public/logo.png'
];

console.log('\n🖼️  Checking Required Images...\n');
requiredImages.forEach(image => {
  const imagePath = path.join(__dirname, '..', image);
  if (fs.existsSync(imagePath)) {
    checks.passed.push(`✅ ${image}`);
    console.log(`✅ ${image}`);
  } else {
    checks.warnings.push(`⚠️  ${image}`);
    console.log(`⚠️  ${image} - MISSING (see IMAGES_NEEDED.md)`);
  }
});

// Check environment variables
console.log('\n🔐 Checking Environment Variables...\n');
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  const requiredEnvVars = [
    'NEXT_PUBLIC_SITE_URL',
    'NEXT_PUBLIC_API_URL'
  ];
  
  requiredEnvVars.forEach(envVar => {
    if (envContent.includes(envVar)) {
      checks.passed.push(`✅ ${envVar}`);
      console.log(`✅ ${envVar}`);
    } else {
      checks.failed.push(`❌ ${envVar}`);
      console.log(`❌ ${envVar} - MISSING`);
    }
  });
  
  // Optional but recommended
  const optionalEnvVars = [
    'NEXT_PUBLIC_GA_ID',
    'NEXT_PUBLIC_ADSENSE_ID'
  ];
  
  optionalEnvVars.forEach(envVar => {
    if (envContent.includes(envVar) && !envContent.includes(`# ${envVar}`)) {
      checks.passed.push(`✅ ${envVar}`);
      console.log(`✅ ${envVar} (optional)`);
    } else {
      checks.warnings.push(`⚠️  ${envVar}`);
      console.log(`⚠️  ${envVar} - Not configured (optional)`);
    }
  });
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('\n📊 Summary:\n');
console.log(`✅ Passed: ${checks.passed.length}`);
console.log(`⚠️  Warnings: ${checks.warnings.length}`);
console.log(`❌ Failed: ${checks.failed.length}`);

if (checks.failed.length === 0) {
  console.log('\n🎉 All critical checks passed!');
  if (checks.warnings.length > 0) {
    console.log('⚠️  Some optional items are missing. See warnings above.');
  }
  console.log('\n✅ Your site is ready for production!');
  process.exit(0);
} else {
  console.log('\n❌ Some critical checks failed. Please fix the issues above.');
  process.exit(1);
}
