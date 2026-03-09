
import sys

def extract_id(filename, target_id):
    with open(filename, 'r') as f:
        content = f.read()
    
    start_str = f'id="{target_id}"'
    start_pos = content.find(start_str)
    if start_pos == -1:
        print(f"ID {target_id} not found")
        return

    # Find the start of the tag
    tag_start = content.rfind('<', 0, start_pos)
    
    # Simple tag balancer
    depth = 0
    pos = tag_start
    while pos < len(content):
        if content.startswith('<div', pos):
            depth += 1
            pos += 4
        elif content.startswith('</div>', pos):
            depth -= 1
            pos += 6
            if depth == 0:
                print(content[tag_start:pos])
                return
        else:
            pos += 1

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract.py <file> <id>")
    else:
        extract_id(sys.argv[1], sys.argv[2])
