#!/bin/bash
cd /home/kavia/workspace/code-generation/astromindscape-65803-c51414a9/astro_mindscape_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

