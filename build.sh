#!/bin/bash
rm inbox-item-count.zip
zip inbox-item-count.zip manifest.json
zip -r inbox-item-count.zip js
zip -r inbox-item-count.zip img
