import os

def find_specific_url(directory, url):
    for subdir, dirs, files in os.walk(directory):
        for file in files:
            filepath = subdir + os.sep + file

            if filepath.endswith(".html") or filepath.endswith(".css") or filepath.endswith(".js"):
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    if url in content:
                        print(f"Found URL {url} in file {filepath}")

find_specific_url('/', 'http://cdn.jsinit.directfwd.com/sk-jspark_init.php')