#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 변경된 파일 목록 가져오기
const getChangedFiles = () => {
  try {
    const output = execSync('git diff --cached --name-only').toString();
    return output.split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error getting changed files:', error);
    return [];
  }
};

// 문서 파일 목록
const docFiles = [
  'docs/architecture.mermaid',
  'docs/technical.md',
  'docs/status.md',
  'tasks/tasks.md'
];

// 변경된 파일 중 문서 파일이 있는지 확인
const changedFiles = getChangedFiles();
const changedDocs = changedFiles.filter(file => docFiles.includes(file));

// 변경된 소스 파일이 있는지 확인
const changedSourceFiles = changedFiles.filter(file => 
  file.startsWith('src/') && !file.endsWith('.test.ts')
);

if (changedSourceFiles.length > 0 && changedDocs.length === 0) {
  console.log('\n⚠️  경고: 소스 코드가 변경되었지만 문서가 업데이트되지 않았습니다.');
  console.log('\n다음 문서들을 확인하고 필요한 경우 업데이트해주세요:');
  docFiles.forEach(doc => {
    console.log(`- ${doc}`);
  });
  console.log('\n.cursorrules 파일의 ON_FILE_CHANGE 규칙을 참고하세요.');
  process.exit(1);
}

console.log('✅ 문서 업데이트 체크 완료'); 