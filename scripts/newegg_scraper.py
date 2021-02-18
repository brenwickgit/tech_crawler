# Imports
import sys
import json
import requests
from bs4 import BeautifulSoup as soup

my_list = []


def get_url(search_term):
    """Generates a proper search URL from the search term"""
    template = 'https://www.newegg.com/p/pl?d={}'
    search_term = search_term.replace(' ', '+')
    return template.format(search_term)


def parse_query(args):
    """Converts the list of arguments into a spaced string"""
    arg_list = ''
    arg_string = ' '
    if len(args) > 1:
        arg_list = args[1:]
        arg_string = arg_string.join(arg_list)
    return arg_string


# ------------------------------------------------Begin Script--------------------------------------------

# Will only run the script if arguments are provided
if len(sys.argv) > 1:
    query = parse_query(sys.argv)
    url = get_url(query)

    # # Opens connection & downloads the HTML
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'}

    # fetching the url, raising error if operation fails
    try:
        response = requests.get(url, headers=headers)
    except requests.exceptions.RequestException as e:
        exit()

    # ---Start scraping---
    page_soup = soup(response.text, "html.parser")

    # Grabs each product
    containers = page_soup.findAll("div", {"class": "item-container"})

    # print('Found {} products.'.format(len(containers)))

    # Info from each product entry
    for container in containers:

        try:
            brand = container.div.div.a.img["title"]

            title = container.findAll("a", {"class": "item-title"})[0].text

            image = container.findAll("img")[0].attrs['src']

            # TODO: Add shipping information
            shipping = container.findAll(
                "li", {"class": "price-ship"})[0].text.strip()
            price = container.findAll(
                "li", {"class": "price-current"})[0].strong.text.strip()
            link = container.findAll("a", {"class": "item-title"})[0]['href']

            if title and price and image:
                entry = {'title': title, 'price': price,
                         'link': link,  'image': image}
                my_list.append(entry)

        except Exception as e:
            pass

    my_json = json.dumps(my_list)
    print(my_json)


else:
    print('Error: You need to specify at least 1 search argument.')
