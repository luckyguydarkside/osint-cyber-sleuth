import requests
from bs4 import BeautifulSoup
import argparse

def extract_metadata(url):
    """
    Extracts metadata from the given URL.
    
    Args:
        url (str): The URL from which to extract metadata.
    
    Returns:
        dict: A dictionary containing metadata information.
    """
    metadata = {}
    
    try:
        # Send a request to the URL
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad responses

        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Extract title
        title = soup.title.string if soup.title else 'No title found'
        metadata['title'] = title
        
        # Extract meta tags
        for meta in soup.find_all('meta'):
            if 'name' in meta.attrs:
                metadata[meta.attrs['name']] = meta.attrs.get('content', 'No content')
            elif 'property' in meta.attrs:
                metadata[meta.attrs['property']] = meta.attrs.get('content', 'No content')
    
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")
    
    return metadata

def main():
    # Set up argument parser
    parser = argparse.ArgumentParser(description='Extract metadata from a given URL.')
    parser.add_argument('url', metavar='URL', type=str, help='The URL to extract metadata from')

    # Parse arguments
    args = parser.parse_args()
    
    # Extract metadata and print it
    metadata = extract_metadata(args.url)
    print("\nExtracted Metadata:")
    for key, value in metadata.items():
        print(f"{key}: {value}")

if __name__ == "__main__":
    main()
```