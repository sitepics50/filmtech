from rembg import remove
from PIL import Image
input_path = 'icl.jpg'
output_path = 'facebook.jpg'
input = Image.open(input_path)
output = remove(input)
output.save(output.path)
