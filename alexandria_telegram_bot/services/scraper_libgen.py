import requests
from bs4 import BeautifulSoup
import urllib.request


base_url = "https://libgen.is"


def search_book(searched_string: str) -> list:
    """Receives a string to be searched and returns an array of objects with title, author and details_url."""
    endpoint = f"{base_url}/search.php?req={searched_string.replace(' ', '+')}"

    source = requests.get(endpoint).content
    soup = BeautifulSoup(source, "lxml")
    html_results = soup.find_all("tr", {"valign": "top"})[1:4]

    results = []
    for snippet in html_results:
        title = str(snippet.find_all("td")[2].text).split("[")[0]
        # unwanted = title.find("font")
        # unwanted.extract()
        author = snippet.find_all("td")[1].text
        url = snippet.find_all("td")[2].find("a")["href"]
        details_url = f'http://library.lol/main/{url.split("md5=")[-1]}'
        results.append(
            {
                "title": title,
                "author": author,
                "details_url": details_url,
            }
        )
    print(results)
    return results


def get_book_download_source(book_download_url: str) -> str:
    """Receives the url to the details page and scrapes the link to the pdf file."""
    source = requests.get(book_download_url).content
    soup = BeautifulSoup(source, "lxml")
    pdf_file_link = soup.find_all("a")[2]["href"]
    return pdf_file_link


def get_book(download_source: str, book_title: str) -> None:
    """Receives the pdf file link and downloads it into the temp folder."""
    print("Starting the get book func")
    book_pdf_file = urllib.request.urlopen(download_source)
    with open(f"alexandria_telegram_bot/assets/temp/{book_title}.pdf", "wb") as output:
        output.write(book_pdf_file.read())


if __name__ == "__main__":
    search_book("Harry Potter")
    # get_book_download_source("http://library.lol/main/410D6144E8E009357D3394AF44585A0C")
    # get_book(
    #     get_book_download_source(
    #         "http://library.lol/main/410D6144E8E009357D3394AF44585A0C"
    #     ),
    #     "Novo teste!",
    # )
