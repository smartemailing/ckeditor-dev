# CKEditor - Mailovatko fork

## How to upgrade

Clone this repo

Configure an `upstream` remote
```bash
$ git remote add upstream git@github.com:ckeditor/ckeditor-dev.git
```

Fetch
```bash
$ git fetch upstream
```

Checkout **mailovatko** branch and merge **upstream/stable**
```bash
$ git checkout mailovatko
$ git merge upstream/stable
```

Resolve conflicts and push

## How to build

Checkout **mailovatko** branch (origins from stable branch)
```
$ git checkout mailovatko
```

Build CKEditor
```
$ ./dev/builder/build.sh
```

