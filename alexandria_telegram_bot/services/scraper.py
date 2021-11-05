import requests
from bs4 import BeautifulSoup

def search_book(searched_string: str) -> object:
    """Receives a string to be searched and returns a json with title, author and image."""
    base_url = 'https://br1lib.org'
    endpoint = f'{base_url}/s/{searched_string}'
    
    source = requests.get(endpoint).content
    soup = BeautifulSoup(source, 'lxml')
    html_results = soup.find_all('tr', class_="bookRow")[0:3]

    results =[]
    for snippet in html_results:
        title = snippet.find('h3', {"itemprop" : "name"}).text
        url = snippet.find('h3', {"itemprop" : "name"}).find('a')['href']
        author = snippet.find('div', class_="authors").text
        image = str(snippet.find('img')['data-srcset']).split(' ')[2]
        results.append({
            'title': title,
            'author': author,
            'url': f'{base_url}/{url}',
            'image': image
            
        })
    print(results)
    return results
    
if __name__ == "__main__":

    search_book('clean code')